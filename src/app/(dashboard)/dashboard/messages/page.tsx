/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import moment from "moment";
import { toast } from "sonner";

export default async function Messages() {
  const res = await fetch(
    "https://portfolio-backend02.vercel.app/api/v1/contact",
    {
      next: { revalidate: 30 },
    }
  );
  if (!res.ok) {
    toast.error("Something went wrong!");
  }
  const result = await res.json();
  const messages = result?.data;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        {messages && messages?.length > 0 ? (
          <ScrollArea className="h-[600px] pr-4">
            {messages?.map((message: any) => (
              <div key={message._id} className="mb-4 last:mb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      {message?.name[0]}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {message.name}
                    </p>

                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 italic mb-2">
                      {message.email}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {moment(message?.createdAt).format("LLLL")}
                    </p>
                    <hr />
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-bold text-primary">Subject:</span>{" "}
                      {message.subject}
                    </div>
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-bold text-primary">Messages:</span>{" "}
                      {message.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        ) : (
          <p className="text-bold">There are no message avaiable!</p>
        )}
      </CardContent>
    </Card>
  );
}
