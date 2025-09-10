
import Product from "@/models/product";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";


export async function GET(request) {
    try {
        
        await connectDB(request)

        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');

        let query = {};
        if (category) {
            query.category = category;
        }

        const products = await Product.find(query);
        return NextResponse.json({ success: true, products }, { status: 200 });



    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}