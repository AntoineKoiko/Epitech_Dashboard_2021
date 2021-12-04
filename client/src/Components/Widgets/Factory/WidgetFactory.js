import RenderStockWidget from '../StockWidget/RenderStockWidget';
import WeatherWidget from '../WeatherWidget';
import YoutubeCommentWidget from '../YoutubeCommentWidget';
import YoutubeSubNBWidget from '../YoutubeSubNBWidget';
import RedditSubFeedWidget from '../RedditSubFeedWidget';
import SpotifyTopTrackWidget from '../SpotifyTopTrackWidget';
import SpotifyTopArtistsWidget from '../SpotifyTopArtistsWidget';

function WidgetFactory({widget, setRefreshWidget}) {
    console.log('widget factory: ', widget)
    if (widget.service === "stock") {
        if (widget.type === "stock_value") {
            return <RenderStockWidget stockID={widget.params.params1} refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
    }
    if (widget.service === "weather") {
        if (widget.type === "actual_weather") {
            return <WeatherWidget cityID={widget.params.params1} refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
    }
    if (widget.service === "youtube") {
        if (widget.type === "video_comment") {
            return <YoutubeCommentWidget videoId="yeYGZmnW_kc" refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
        if (widget.type === "channel_stat") {
            return <YoutubeSubNBWidget channelId="UCAuUUnT6oDeKwE6v1NGQxug" widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
    }
    if (widget.service === "reddit") {
        if (widget.type === "subreddit_post") {
            return <RedditSubFeedWidget subredditName={widget.params.params1} sort="new" refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
    }
    if (widget.service === "spotify") {
        if (widget.type === "top_artists") {
            return <SpotifyTopArtistsWidget timeRange={widget.params.params1} refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
        if (widget.type === "top_tracks") {
            return <SpotifyTopTrackWidget timeRange={widget.params.params1} refresh={widget.refresh} widgetData={widget} setRefreshWidget={setRefreshWidget}/>;
        }
    }
    return <></>
}

export default WidgetFactory;