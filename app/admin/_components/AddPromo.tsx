import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/lib/firebase"
import { collection, setDoc, doc, addDoc } from "firebase/firestore"
import { Percent } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function AddPromo() {

    const [name,setName] = useState("");

    const createPromoCode = async () => {
       try {
        if (name !== ""){
            await addDoc(collection(db,"promos") , {
                promoName:name
            })
            toast.success("Promo Code is created")
        } else {

            toast.error("fill the field")
        }
    } catch (err) {
        console.log(err)
           toast.error("Sorry , something went wrong")
       }
    }

  return (
    <Dialog>
      <DialogTrigger >
        <Button className="dark:bg-gray-800 dark:text-white dark:border-gray-700 cursor-pointer">
        <Percent />
Add Promo code
    </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Promo Code</DialogTitle>
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
            onChange={(e) => setName(e.target.value)}
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              type="text"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={() => createPromoCode()}>
            Create
          </Button>
          <DialogClose>
            <Button type="button" variant={"secondary"}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
