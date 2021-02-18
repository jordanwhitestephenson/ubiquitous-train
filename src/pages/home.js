import * as React from "react";
import { useDencrypt } from "use-dencrypt-effect";
import Layout from '../components/layout'
const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];
const HomePage = () => {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);

        return () => clearInterval(action);
    }, []);

    return (

        <Layout className="wrapper" location="Home">
            HGOME
        </Layout>

    )

}
export default HomePage