import datagenlayer
import datagen_dao

if __name__ == "__main__":
    datagen_dao.activate_stream()
    datagenlayer.bootapp()
