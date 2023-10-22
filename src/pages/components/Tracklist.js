import * as S from './Search/Search.styles'
import TrackOne from './trackOne/TrackOne'

const TrackList = ({filteredTracks, turnOnTrack}) => {

    return (
        <S.MusicList>
            {filteredTracks?.map((track) => ( 
                <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />
            ))}
        </S.MusicList>
      )
}

export default TrackList
