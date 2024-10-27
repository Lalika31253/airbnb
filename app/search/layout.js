import Header from "./Header";

const SearchLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )

}

export default SearchLayout;