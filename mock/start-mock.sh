MOCK_PORT=8000
MOCK_DIR="$(dirname "$0")"
WIRE_MOCK_JAR="$MOCK_DIR/wiremock-standalone.jar"

if [ ! -f $WIRE_MOCK_JAR ]; then
  echo 'wiremock-standalone.jar is not detected, download starting: '
  curl -o $WIRE_MOCK_JAR https://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-standalone/2.27.0/wiremock-standalone-2.27.0.jar
fi

java -jar $WIRE_MOCK_JAR --root-dir $MOCK_DIR --port $MOCK_PORT
