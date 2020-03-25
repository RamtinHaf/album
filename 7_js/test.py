class Albums():
    """Class representing a collection of albums."""

    def __init__(self, albums_file, tracks_file):
        self.__albums = {}
        self.__load_albums(albums_file)
        self.__load_tracks(tracks_file)
       

    def __load_albums(self, albums_file):
        """Loads a list of albums from a file."""
        # TODO complete

        f = open(albums_file,"r")

        for i in f.readlines():
            albums = i.split("\t")

            self.__albums[albums[0]] = {}

            self.__albums[albums[0]]['Artist'] = albums[1]
            self.__albums[albums[0]]['Name'] = albums[2]
            self.__albums[albums[0]]['image'] = albums[3] #remove \n

        #print(self.__albums)




    def __load_tracks(self, tracks_file):
        """Loads a list of tracks from a file."""
        # TODO complete
        f = open(tracks_file,"r")
        for i in f.readlines():

            track = i.split("\t")
            if 'songs' in self.__albums[track[0]]:
                self.__albums[track[0]]['songs'].append([track[1], track[2][:-1]]) #adding each line to one object
            else:
                self.__albums[track[0]]['songs'] =[]
                self.__albums[track[0]]['songs'].append([track[1], track[2][:-1]])
            
    #to get the whole song from songs:
        #print("heei" + str(self.__albums['1']['songs'][0]))
        

        #print(self.__albums['1']['songs'])
        #print(self.__albums['2']['songs'])




    def get_albums(self):
        """Returns a list of all albums, with album_id, artist and title."""
        # TODO complete
        albumList = []
        for i in self.__albums: #loops through the whole dictinary
            albumList.append([i, self.__albums[i]['Artist'], self.__albums[i]['Name']])
            
        return albumList

    def get_album(self, album_id):
        """Returns all details of an album."""
        albumDetails = []
        albumDetails.append([self.__albums[album_id]['songs'],self.__albums[album_id]['image']])
        # TODO complete
        print(albumDetails[0])
        return albumDetails


# the Albums class is instantiated and stored in a config variable
# it's not the cleanest thing ever, but makes sure that the we load the text files only once
#app.config["albums"] = Albums("data/albums.txt", "data/tracks.txt")

a = Albums("data/albums.txt", "data/tracks.txt")

a.get_album("2")