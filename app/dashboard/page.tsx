"use client";
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
    </div>
	);
	
}

export default DashboardPage;




