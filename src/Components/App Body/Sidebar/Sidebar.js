import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../../ContextProvider/StateProvider';

import './Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {

  const [ { user }, dispatch ] = useStateValue();

  return(
    <div className="sidebar">
      <SidebarRow
        Icon={AddCircleIcon}
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        Icon={EmojiFlagsIcon}
        title="pages"
      />
      <SidebarRow
        Icon={PeopleIcon}
        title="Friends"
      />
      <SidebarRow
        Icon={ChatIcon}
        title="Messenger"
      />
      <SidebarRow
        Icon={StorefrontIcon}
        title="MarketPlace"
      />
      <SidebarRow
        Icon={VideoLibraryIcon}
        title="Videos"
      />
      <SidebarRow
        Icon={ExpandMoreIcon}
        title="MarketPlace"
      />
    </div>
  )
}

export default Sidebar;