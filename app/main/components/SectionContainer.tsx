
const SectionContainer = (props: any) => {
    return (
        <section className="flex flex-col h-screen border-b border-[#bacbdf] p-8 md:p-[75px]">
            <h1 className="text-sectionHeader font-messiri font-sectionHeader uppercase tracking-sectionHeader pb-6">{props.name}</h1>
            <div className="flex flex-col-reverse lg:flex-row gap-20 font-sectionText">{props.children}</div>
        </section>
    );
};

export default SectionContainer;