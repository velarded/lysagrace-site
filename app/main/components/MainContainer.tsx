

const MainContainer = (props: any) => {
    return (
        <main className="bg-iceblue min-h-screen max-w-screen flex justify-center desktop:px-[150px] md:px-[100px]">
          <div className="rounded-lg w-full bg-containerBg">
            {props.children}
          </div>
        </main>
    )
}

export default MainContainer;