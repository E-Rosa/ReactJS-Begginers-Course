function PurchaseDataTagComp(props){
    return (
        <div className="purchase-data-tag">
            <span className="header-label">{props.label}</span>
            <span className="header-label price">{props.labelValue}</span>
        </div>
    )
}

export default PurchaseDataTagComp;