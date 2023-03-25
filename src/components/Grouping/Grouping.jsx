import Image from 'next/image'
import Link from 'next/link'
export default function GroupingBox({ Name, Number }) {
        return (
                <>
                        <div className="GroupingOnce"><a href="#">{Name}</a><span>{Number}</span></div>
                </>
        )
}
