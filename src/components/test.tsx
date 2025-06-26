






function Item({title, href}:{title:string, href:string}) {
    return(
        <div style={{width:"150px"}}className="card card-analytics card--has-onclick" id="card-analytics">
            <h3 style={{textDecoration:"underline"}} className="card__title">{title} ↗</h3>
            <a target="_blank" type="button" aria-label="Edit Analytics" className="btn card__click btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-none btn--withoutPopup" href={href}>
                <span className="btn__content">
                </span>
            </a>
        </div>
    )
}





export default function MyAfterDashboardComponent() {
    return(
        <div style={{display:"flex", flexWrap:"wrap", gap:"1.5rem"}}>
            <Item title="Analytics" href="https://analytics.wsz.fr/share/RmrLGLw6bSRKRaab/General%20Assembly" />
        </div>
    )
}
