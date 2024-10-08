FROM mcr.microsoft.com/devcontainers/base:ubuntu
USER vscode
COPY ./scripts/installBuildTools.sh /tmp
RUN bash ./tmp/installBuildTools.sh
RUN sudo rm /tmp/installBuildTools.sh
