"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser  } from "@clerk/nextjs";
import { title } from "@/components/primitives";

function DashboardPage() {
	const { isLoaded, isSignedIn, user } = useUser();
  
	
	  if (!isLoaded || !isSignedIn) {
		return null;
	  }
	return (
		<div>
			<h1 className={title()}>Dashboard</h1>
			<p>Welcome, {user.firstName}</p>
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
	);
	
}

export default DashboardPage;