import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { userId } = getAuth(request);
        
        if (!userId) {
            return NextResponse.json({ success: false, message: 'User not authenticated' }, { status: 401 });
        }

        await connectDB();
        
        const user = await User.findById(userId);

        if (!user) {
            const newUser = new User({
                _id: userId,
                name: "",
                email: "",
                imageUrl: "",
                cartItems: {}
            });
            await newUser.save();
            return NextResponse.json({ success: true, user: newUser });
        }

        return NextResponse.json({ success: true, user });

    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
