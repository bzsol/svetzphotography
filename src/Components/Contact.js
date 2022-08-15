
const Contact = () => {
    return (
        <section className="mb-20" id="contact">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    Kapcsolat 🛰️
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <div className="flex flex-col items-center p-6 mt-16 space-y-6  md:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md">
                <h5 className="text-2xl font-bold  text-red-500"><i className="bi bi-envelope-fill"></i> E-mail</h5>
                <a href="mailto:boss@svetz.hu" className="text-lg hover:text-sky-500 hover:font-semibold">boss@svetz.hu</a>
                </div>
                <div className="flex flex-col items-center p-6 mt-16 space-y-6  md:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md">
                <h5 className="text-2xl font-bold  text-red-500"><i className="bi bi-telephone-fill"></i> Telefonszám</h5>
                <a href="tel:+3620420420" className="text-lg hover:text-sky-500 hover:font-semibold">+36 20 420 420</a>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;