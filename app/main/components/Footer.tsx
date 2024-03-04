const Footer = (props: any) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-iceblue p-5 flex justify-center items-center uppercase">
          <p>&copy; Lysa Grace {currentYear}</p>
        </footer>
    )
}

export default Footer;