"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SocialLogin() {

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up </CardTitle>
        <CardDescription>
          Create a new account to start contribute
        </CardDescription>
      </CardHeader>
      <CardContent>
       
        <div className="mt-4 space-y-2">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={20}
              height={20}
              alt="Google logo"
            />
            Sign in with Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width={20}
              height={20}
              alt="GitHub logo"
            />
            Sign in with Github
          </Button>
        </div>
      </CardContent>
  
    </Card>
  );
}
