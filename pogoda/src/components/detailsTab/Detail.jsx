export function Detail({ title, value }) {
    return (
        <div className="detail">
            <p className="detail-title">{title + value}</p>
        </div>
    )
}