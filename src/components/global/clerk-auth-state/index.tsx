import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Loader from "../loader";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

type Props = {};
const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70">
            <User></User>
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          ></UserButton.UserProfileLink>
        </UserButton>
      </SignedIn>
    </>
  );
};
export default ClerkAuthState;
