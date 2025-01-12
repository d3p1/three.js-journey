##
# @description Dockerfile for Dev Container
# @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
##
FROM node:18

##
# @note Install basic development tools
##
RUN apt update && apt install -y less man-db sudo nano

##
# @note Install required dependency to avoid
#       `Error: spawn xdg-open ENOENT` error
# @link https://stackoverflow.com/questions/73942710/vitest-ui-causing-error-spawn-xdg-open-enoent
##
RUN apt install -y xdg-utils

##
# @note Ensure default `node` user has access to `sudo`
##
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

##
# @note Set `DEVCONTAINER` environment variable to help with orientation
##
ENV DEVCONTAINER=true
