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
import { toast } from "sonner"

export function ShareTicket({openState,setOpen,id,code}:{openState:boolean,setOpen:any,id:string,code:string}) {
  return (
    <Dialog open={openState}>
     
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share the ticket</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-start  flex-col gap-4">
          <div className="grid flex-1 gap-2 w-full">
            <Label htmlFor="link" className="mb-1">
              Link
            </Label>
            <Input
              id="link"
              className="w-full"
              defaultValue={location.origin + `?id=${id}`}
              readOnly
            />
          </div>
          <div className="grid flex-1 gap-2 w-full" >
            <Label htmlFor="code" className="mb-1">
              Your code
            </Label>
            <Input
              id="code"
              defaultValue={code}
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={() => {
            navigator.clipboard.writeText(code)
          }}>
            Copy Code
          </Button>
          <DialogClose >
            <Button variant={"secondary"} onClick={() => setOpen(false)} type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
