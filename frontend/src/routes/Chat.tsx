import { Button } from "@/components/ui/button";
import { LucideCircleArrowOutDownRight, Search, Send } from "lucide-react";
import { useState, useEffect } from "react";
import ChatEntry from "@/components/ChatEntry";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MessageType, ChatType } from "@/types/chat.type";
import ResponseMessage from "@/components/ResponseMessage";

export default function Chat() {
    const [user, setUser] = useState<string>("User");
    const [chatHistory, setChatHistory] = useState<any>([]);
    const [newChatName, setNewChatName] = useState<string>("");

    let [message, setMessage] = useState<string>("");

    const [selectedChat, setSelectedChat] = useState<ChatType | undefined>(
        {
        "name": "Atesh ma maiko", 
        "messages": [
                {
                    "author": "USER",
                    "content": "Skibidi, skibidi on the wall, who's the gyattest of them all"
                },
                {
                    "author": "AI",
                    "content": "Ivaylo"
                },
            ]
     
        }
    )

    const handelNewMessage = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <div
                className={`min-w-screen overflow-hidden h-screen bg-gradient-to-b bg-gray-300 flex`}
            >
                <div
                    className={`w-1/5  bg-gray-900 text-white min-h-[80%] items-center flex flex-col my-5 ml-5 rounded-2xl`}
                >
                    <div className="w-[90%] h-full mt-12 flex flex-col items-center">
                        <div className="flex gap-4 items-center border border-pink-50 w-full p-2 px- 4 rounded-[36px]">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>IS</AvatarFallback>
                            </Avatar>
                            <h1>{user}</h1>
                        </div>

                        <div className="flex items-center w-full gap-2 mt-[36px]">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className={`bg-gradient-to-r from-[#1E1E1F] to-[#6218DC] text-white p-6 w-full rounded-[36px]'} font-black`}
                                    >
                                        + New chat
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-black text-white">
                                    <DialogHeader>
                                        <DialogTitle>New Chat</DialogTitle>
                                    </DialogHeader>
                                    <div>
                                        <Input
                                            placeholder="Enter chat name"
                                            className="p-6"
                                            onChange={(e) =>
                                                setNewChatName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <Button>New Chat</Button>
                                </DialogContent>
                            </Dialog>

                            <Button
                                size="icon"
                                className="rounded-full h-full w-[64px]"
                            >
                                <Search />
                            </Button>
                        </div>
                        <div className="flex gap-8 items-center my-[24px] py-[20px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-zinc-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-zinc-600">
                            <p>You conversations</p>
                            <Button
                                variant="link"
                                className={`text-purple-500`}
                            >
                                Clear All
                            </Button>
                        </div>
                        <ScrollArea className="h-full flex flex-col overflow-auto">
                            {chatHistory.map((chat: any) => {
                                return <ChatEntry chatTitle={chat[2]} />;
                            })}
                        </ScrollArea>
                    </div>
                </div>
                <div className="w-4/5 min-h-[80%] items-center flex flex-col m-5 relative rounded-2xl text-white">

                    <div className={`text-white w-full h-5/6 flex flex-col p-16 gap-6`}>
                        {
                            selectedChat?.messages.map((item: MessageType) => {
                                return <ResponseMessage author={item.author} content={item.content} />
                            })
                        }

                    </div>

                    <form
                        onSubmit={handelNewMessage}
                        className={`bg-gray-900 text-black w-[70%] h-[12%] rounded-xl flex gap-5 p-6 items-center`}
                    >
                        <Textarea
                            onChange={(e) => setMessage(e.target.value)}
                            className="resize-none border-none outline-none focus:outline-none"
                        />
                        <Button
                            size="icon"
                            className={`bg-[#5661F6] hover:bg-[#5331F3] rounded-full w-14 h-14`}
                        >
                            <Send />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
