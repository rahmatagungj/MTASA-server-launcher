import eel

eel.init('GUI', allowed_extensions=['.js', '.html', '.css'])


def main():
    eel.start('index.html', host='localhost', mode='chrome',
    size=(800, 550), port=2307, disable_cookie=True)


if __name__ == '__main__':
    main()
