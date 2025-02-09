"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { messages as initialMessages } from "../../../../utils/data/MockData";

export default function Messages() {
  const [messages] = useState(initialMessages);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {messages.map((message) => (
            <div key={message._id} className="mb-4 last:mb-0">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    {message.sender[0]}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {message.sender}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(message.timestamp).toLocaleString()}
                  </p>
                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    {message.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
