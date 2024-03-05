
const SectionContainer = (props: any) => {
    return (
        <section className="w-full flex flex-col min-h-screen border-b border-[#bacbdf] desktop:p-16 md:p-[75px]">
            <h1 className="text-sectionHeader font-messiri font-sectionHeader uppercase tracking-sectionHeader pb-6">{props.name}
            <div className="w-1/4 border-b-4 rounded-tr-xl rounded-bl-xl"></div></h1>
            <div className="font-sectionText">{props.children}</div>
            {/* <div className="flex flex-col-reverse lg:flex-row gap-20 font-sectionText">{props.children}</div> */}
        </section>
    );
};

export default SectionContainer;