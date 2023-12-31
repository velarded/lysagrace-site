
const SectionContainer = (props: any) => {
    return (
        <section className="flex flex-col">
            <h1 className="text-sectionHeader font-messiri font-sectionHeader uppercase tracking-sectionHeader pb-6">{props.name}</h1>
            <div className="flex flex-col-reverse lg:flex-row gap-20    ">{props.children}</div>
        </section>
    );
};

export default SectionContainer;