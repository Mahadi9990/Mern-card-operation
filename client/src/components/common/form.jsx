import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonFrom({fromContorls ,formData, setFormData, onSubmit ,buttonText}) {

    const type ={
        INPUT:"input",
        SELECT:"select",
        TEXTAREA:"textarea"
    }
    function renderInputByComponetType(getContolsItems){
        let element =null
        const value =formData[getContolsItems.name] || ""
        switch(getContolsItems.componentType){
            case type.INPUT:
                element =(<Input 
                    name={getContolsItems.name}
                    placeholder={getContolsItems.placeholder}
                    type={getContolsItems.type}
                    id={getContolsItems.name}
                    value={value}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            [getContolsItems.name]:e.target.value
                        })
                    }}
                />)
            break;
            case type.SELECT:
                element =(<Select onValueChange={(value)=>{
                        setFormData({
                            ...formData,
                            [getContolsItems.name]:fvalue
                        })
                    }} value={value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getContolsItems.placeholder}/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                         getContolsItems.option &&
                          getContolsItems.option.length > 0 ?
                          getContolsItems.option.map((optionItem)=>
                            <SelectItem key={option.id} value={opiton.id}>{option.label}</SelectItem>
                        ):null
                        }
                    </SelectContent>
                </Select>)
            break;
            case type.TEXTAREA:
                element =(
                <Textarea
                    name={getContolsItems.name}
                    placeholder={getContolsItems.placeholder}
                    id={getContolsItems.id}
                    value={value}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            [getContolsItems.name]:e.target.value
                        })
                    }}
                />)
            break;
            default:
                 element =(<Input 
                    name={getContolsItems.name}
                    placeholder={getContolsItems.placeholder}
                    type={getContolsItems.type}
                    id={getContolsItems.name}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            [getContolsItems.name]:e.target.value
                        })
                    }}
                />)
                break;
        }
        return element;
    }
    
    return ( 
    <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
                {fromContorls.map((contolsItems)=>
                <div className="grid w-full gap-1.5" key={contolsItems.name}>
                    <Label className="mb-1">{contolsItems.label}</Label>
                    {
                        renderInputByComponetType(contolsItems)
                    }
                </div>
                
                )}
        </div>
        <Button type="submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>
    </form> 
    );
}

export default CommonFrom;