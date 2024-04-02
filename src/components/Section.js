export default function Section({children}){

    return(
        <section className="section">
        <LevelContext.Provider value={level+1}>
       {children}
        </LevelContext.Provider>
        </section>
    );
}