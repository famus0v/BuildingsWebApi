ARG BUILD_CONFIGURATION=Release

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["RoomsWebApi.csproj", "RoomsWebApi/"]
RUN dotnet restore "RoomsWebApi/RoomsWebApi.csproj"
WORKDIR "/src/RoomsWebApi"
COPY . .

RUN dotnet build "./RoomsWebApi.csproj" -c "$BUILD_CONFIGURATION" -o /app/build

FROM build AS publish
RUN dotnet publish "./RoomsWebApi.csproj" -c "$BUILD_CONFIGURATION" -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RoomsWebApi.dll"]