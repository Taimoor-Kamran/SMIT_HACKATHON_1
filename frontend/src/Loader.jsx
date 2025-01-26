import { TailSpin } from 'react-loaders';

function Loader() {

    return (
        <div className="flex justify-center items-center">
            <TailSpin color="#36D7B7" height={50} width={50} />
        </div>

    )
}

export default Loader