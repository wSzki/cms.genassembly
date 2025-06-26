



function Item({title, href}:{title:string, href:string}) {
    return(
        <div >
            <a target="_blank" type="button" aria-label="Edit Analytics" className="" href={href}>
            <p style={{textDecoration:"none"}} className="nav__link">{title} ↗</p>
            </a>
        </div>
    )
}





export default function MyAfterDashboardComponent() {
    return(
        <div style={{display:"flex", flexDirection:"column",flexWrap:"wrap", gap:"0rem"}} className="nav-group__content">
            <Item title="Analytics" href="https://analytics.wsz.fr/share/RmrLGLw6bSRKRaab/General%20Assembly" />
        </div>
    )
}
