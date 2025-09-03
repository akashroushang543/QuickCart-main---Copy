import Address from "@/models/Address";
import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        const { userId } = getAuth(request);
        const {address} = await request.json()
        await connectDB()
        
        // Map frontend field name to database field name
        const dbAddress = {
            userId,
            fullName: address.fullName,
            PhoneNumber: address.phoneNumber, // Map phoneNumber to PhoneNumber
            pincode: address.pincode,
            area: address.area,
            city: address.city,
            state: address.state
        };
        
        const newAddress = await Address.create(dbAddress)
        return NextResponse.json({ success: true, address: newAddress });
    } catch (error){
        return NextResponse.json({ success: false, message: error.message });
    }
}