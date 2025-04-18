import CursorHighlight from "@/components/cursor-highlight";
import Footer from "@/components/footer";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen bg-[#0f0c29] text-white">
            <CursorHighlight />
            <main className="flex-1">{children}</main>
            <Footer />
        </main>
    );
}

export default RootLayout;