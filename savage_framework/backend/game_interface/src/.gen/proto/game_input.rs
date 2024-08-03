// This file is @generated by prost-build.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GameInput {
    #[prost(message, optional, tag = "1")]
    pub client_input: ::core::option::Option<ClientInput>,
    #[prost(message, optional, tag = "2")]
    pub room_input: ::core::option::Option<RoomInput>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClientInput {
    #[prost(uint64, tag = "1")]
    pub sender_id: u64,
    #[prost(message, optional, tag = "2")]
    pub game_input_message: ::core::option::Option<::prost_types::Any>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoomInput {
    #[prost(uint64, repeated, tag = "1")]
    pub players_joined: ::prost::alloc::vec::Vec<u64>,
    #[prost(uint64, repeated, tag = "2")]
    pub players_left: ::prost::alloc::vec::Vec<u64>,
    #[prost(uint64, optional, tag = "3")]
    pub game_master_id: ::core::option::Option<u64>,
}
