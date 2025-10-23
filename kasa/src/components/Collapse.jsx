import { useState } from "react"
import "../sass/collapse.scss"

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" >
                <span className="collapse-title">{title}</span>
                <div className={`collapse-icon ${isOpen ? "rotate" : ""}`} onClick={() => setIsOpen(!isOpen)}>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>

            </div>

            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {description}
            </div>
        </div>
    )
}

export default Collapse
