export default function Footer() {
        const DateNew = new Date()
        const DateClickFilm = DateNew.toLocaleDateString().slice(5, 10)
        return (
                <>
                        <div className="Footer text-center">
                                <span>ClickFilm {DateClickFilm}</span>
                        </div>
                </>
        )
}
