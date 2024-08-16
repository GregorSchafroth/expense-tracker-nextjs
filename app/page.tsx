import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import AddTransaction from "@/components/AddTransaction";

const page = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }

  return (
    <>
    <h2>Welcome, {user.firstName}</h2>
    <AddTransaction />
    </>
  )
}

export default page