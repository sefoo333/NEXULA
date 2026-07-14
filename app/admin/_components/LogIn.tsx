"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function LogIng() {

  const [open,setOpen] = useState(true);
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
const [dataStorage,setIt] = useState(false);
  const extractData = async () => {
      const getData = JSON.parse(localStorage.getItem("admin_role_seif_ali") || "null")
      console.log(getData)
setIt(getData)
  }

  useEffect(() => {
    extractData()
  },[])

    function handleChange(e:any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const AdminAccount = {
    name:"admin",
    password:"myAdmin_sefoo-333"
  }


  return (
    <>
    <Dialog open={dataStorage !== null ? false : open}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Login admin</DialogTitle>
           
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input onChange={handleChange} id="name-1" name="name" />
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input onChange={handleChange} id="password" name="password" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="submit" onClick={() => {
 if (form.name === AdminAccount.name && form.password === AdminAccount.password){
setOpen(false)
   toast.success("Welcome back 😀", {
                  position:"top-center",
   className:"!bg-gray-900 !border-gray-700 !text-white",
                    descriptionClassName:"!text-gray-400",                  
                

        })

        localStorage.setItem("admin_role_seif_ali",JSON.stringify(true));
      } else {
        toast.error("name or password is wrong ")
      }
            }}>Login</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </>
  )
}
