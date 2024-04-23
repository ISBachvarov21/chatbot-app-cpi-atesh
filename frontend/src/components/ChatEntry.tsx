import { MessageCircle } from "lucide-react";

export default function ChatEntry ({ chatTitle, onclick }: any) {
    return (
        <>
            <div onClick={onclick} className="flex items-center gap-4 p-4 hover:bg-[#999] cursor-pointer rounded-xl">
                <MessageCircle />
                <h2>{chatTitle}</h2>
            </div>
        </>
    )
}
