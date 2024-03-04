

const MainContainer = (props: any) => {
    return (
        <main className="bg-iceblue min-h-screen flex justify-center">
          <div className="main-container-test w-screen rounded-lg 2xl:mx-[150px] md:mx-[100px]">
            {props.children}
          </div>
        </main>
    )
}

export default MainContainer;