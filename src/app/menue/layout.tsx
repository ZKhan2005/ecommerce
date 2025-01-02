import MenueHeader from '../components/menueHeader'


export default function MenueLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
     
            <> 
            <MenueHeader/>
          {children}
      
            </>
    );
  }