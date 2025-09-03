import { inngest } from "@/config/inngest";



export async function POST(request) {
    try{
        const { userId } = getAuth(request);
        const { items, address } = await request.json();
        if (!address || items.length === 0) {
            return NextResponse.json({ success: false, message: 'Address or items are required' });
            
        }
        //caluculate amount using items
        const amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return acc + product.price * item.quantity;
        }, 0);

        await inngest.send({
            name: 'order/created',
            data: {
                userId,
                items,
                address,
                amount: amount  + Math.floor(amount * 0.2),
                date: Date.now(),
            }
        })

        //clear user cart
        const user = await User.findById(userId);
        user.cartItems = [];
        await user.save();

        return NextResponse.json({ success: true, message: 'Order Placed successfully' });



    } catch (error){
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}
