import { MessageCircle } from "lucide-react";

export default function ChatEntry ({ chatTitle, onclick, selected }: any) {
    return (
        <>
            <div onClick={onclick} className={`flex items-center gap-4 p-4 hover:bg-[#999] cursor-pointer rounded-lg ${selected? "bg-[#999]": ""}`}>
                <MessageCircle />
                <h2>{chatTitle}</h2>
            </div>
        </>
    )
}
