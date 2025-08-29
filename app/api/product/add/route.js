import { NextResponse } from 'next/server';
import Product from '@/models/product';
import { v2 as cloudinary } from 'cloudinary';
import { getAuth } from "@clerk/nextjs/server";
import authSeller from '@/lib/authSeller';
import connectDB from '@/config/db';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const { userId } = getAuth(request)
        const isSeller = await authSeller(userId)

        if (!isSeller) {
            return NextResponse.json({ success: false, message: 'User not authorized' }, { status: 401 });
        }

        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const offerPrice = formData.get('offerPrice');


        const price = formData.get('price');
        const category = formData.get('category');
        const files = formData.getAll('image');

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: 'No files uploaded' }, { status: 400 });
        }
        const result = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                return new Promise ((resolve,reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: 'auto' },
                        (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                    stream.end(buffer);

                });

            })
        )

        const image = result.map(result => result.secure_url)
        await connectDB()
        const newProduct = await Product.create({
            userId,
            name,
            description,
            price: Number(price),
            offerPrice: Number(offerPrice),
            category,
            image,
            date: Date.now(),
        })
        return NextResponse.json({ success: true, message: 'Product added successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}














        // const { name, price, category, image } = await request.json();
