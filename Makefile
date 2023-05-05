IMAGE_NAME="ricardomiguel/ws-fe"
CONTAINER_NAME="frontend"

b:
	@echo "Building ${CONTAINER_NAME}..."
	@echo ""
	docker build -t ${IMAGE_NAME} --build-arg BE_HOST="localhost:5000" .
	@echo ""

r:
	@echo "Running ${CONTAINER_NAME}..."
	@echo ""
	docker run --name ${CONTAINER_NAME} -p 3000:80 -d --network ws ${IMAGE_NAME}
	@echo ""
	@echo "Check localhost:3000"
	@echo ""

f: b r

s:
	@echo "Stopping ${CONTAINER_NAME}..."
	@echo ""
	@docker stop ${CONTAINER_NAME}
	@echo ""

rm:
	@echo "Removing ${CONTAINER_NAME}..."
	@echo ""
	@docker rm ${CONTAINER_NAME}
	@echo ""

c: s rm