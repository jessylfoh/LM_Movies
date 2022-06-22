// import React, { useState } from 'react'
// import { BottomNavigation } from 'react-native-paper';
// import HomeScreen from '../screens/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import SearchScreen from '../screens/SearchScreen';



// //Déclaration des routes
// const HomeRoute = () => <HomeScreen />
// const FavoritesRoute = () => <FavoritesScreen />
// const SearchRoute = () => <SearchScreen />

// //Navigation
// const TabNavigation = () => {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([

//         { key: 'home', title: 'Liste', icon: 'movie' },
//         { key: 'favorites', title: 'Mes favoris', icon: 'heart' },
//         { key: 'search', title: 'Recherche', icon: 'folder-search' }
//     ]);

//     const renderScene = BottomNavigation.SceneMap({
//         home: HomeRoute,
//         favorites: FavoritesRoute,
//         search: SearchRoute
//     });

//     return (
//         <BottomNavigation
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//         />
//     );
// };

// export default TabNavigation