import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs, messages } from "../../../utils/data/MockData";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard - Mohammad Rana Arju",
  description:
    "I'm Mohammad Rana Arju. I'm a Jr Full Stack web developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I'm skilled at Next js, React js, JavaScript, Prisma, Node js, Express js, MongoDB, firebase, Github, JWT, CSS3, HTML5 and more. I am available for any kind of job opportunity that suits my skills and interests.",
};
export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
         { //<Edit className="h-4 w-4 text-muted-foreground" />
         }
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{blogs.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          {//<FolderPlus className="h-4 w-4 text-muted-foreground" />
          }
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Messages</CardTitle>
{          //<MessageSquare className="h-4 w-4 text-muted-foreground" />
}        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{messages.length}</div>
        </CardContent>
      </Card>
    </div>
  );
}
