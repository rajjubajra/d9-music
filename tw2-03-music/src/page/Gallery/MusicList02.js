
import ImageOnload from '../../components/ImageOnload';
import BlockAll from './BlockAll';
import BlockOne from './BlockOne';

function MusicList02({item, index}) {

  return (
    <div className="w-full max-w-screen-xl m-auto p-10">
      <div className="grid grid-cols-8 lg:grid-row-2 md:grid-rows-3 gap-4 ">
        <BlockOne />
        <BlockAll />
      </div>
    </div>
  )
}

export default MusicList02