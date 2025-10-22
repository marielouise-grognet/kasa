import { useState } from "react"
import { ChevronDown } from "lucide-react"
import "../sass/collapse.scss"

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" >
                <span className="collapse-title">{title}</span>
                <ChevronDown 
                    className={`collapse-icon ${isOpen ? "rotate" : ""}`} 
                    onClick={() => setIsOpen(!isOpen)}/>
            </div>

            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {description}
            </div>
        </div>
    )
}

export default Collapse
